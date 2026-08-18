function qs(id) {
  return document.getElementById(id);
}

function show(id) {
  const el = qs(id);

  if (el) {
    el.classList.remove('hidden');
  }
}

function hide(id) {
  const el = qs(id);

  if (el) {
    el.classList.add('hidden');
  }
}

function resetPage() {
  window.location.reload();
}

function toggleEditing(containerId, button) {
  const container = qs(containerId);

  if (!container) {
    return;
  }

  const items = container.querySelectorAll('.note-item');
  const willEdit = !Array.from(items).some(
    (item) => item.getAttribute('contenteditable') === 'true'
  );

  items.forEach((item) => {
    item.setAttribute('contenteditable', willEdit ? 'true' : 'false');
  });

  if (button) {
    button.textContent = willEdit ? 'Xong chỉnh sửa' : 'Sửa nội dung';
  }
}


/* ========================================
   OPTION A
   ======================================== */

function optionAOrganize() {
  const buckets = {
    main: qs('a-main-result'),
    unclear: qs('a-unclear-result'),
    next: qs('a-next-result')
  };

  Object.values(buckets).forEach((bucket) => {
    if (bucket) {
      const heading = bucket.querySelector('h3');
      bucket.innerHTML = heading ? heading.outerHTML : '';
    }
  });

  document.querySelectorAll('.a-classification').forEach((select) => {
    const bucket = buckets[select.value];

    if (!bucket) {
      return;
    }

    const item = document.createElement('div');
    item.className = 'note-item';
    item.textContent = select.dataset.content;

    const source = document.createElement('span');
    source.className = 'source';
    source.textContent = `Nguồn: Bài 4 · ${select.dataset.source}`;
    item.appendChild(source);
    bucket.appendChild(item);
  });

  hide('a-raw');
  show('a-organized');
}

function optionASuggest() {
  show('a-suggestion');
}

function optionAAddSuggestion() {

  const next = qs('a-next-result');

  if (next) {

    next.innerHTML += `
      <div class="note-item">
        Khi nào nên dùng FULL OUTER JOIN?
        <small>
          Được thêm từ gợi ý AI theo yêu cầu của bạn.
        </small>
      </div>
    `;

  }

  hide('a-suggestion');
}


/* ========================================
   OPTION B
   ======================================== */

function optionBStart() {
  hide('b-intro');
  show('b-confirm');
}

function optionBConfirm() {

  const checked =
    document.querySelector(
      'input[name="classification"]:checked'
    );

  const choice =
    checked
      ? checked.value
      : 'Phần chưa hiểu';

  const choiceHeading = qs('b-choice');

  if (choiceHeading) {
    choiceHeading.textContent = choice;
  }

  hide('b-confirm');
  show('b-result');
}

function optionBSkip() {

  const choiceHeading = qs('b-choice');

  if (choiceHeading) {
    choiceHeading.textContent =
      'Giữ ở mục Chưa phân loại';
  }

  hide('b-confirm');
  show('b-result');
}


/* ========================================
   OPTION C
   ======================================== */

function optionCGenerate() {
  hide('c-intro');
  show('c-draft');
}

function optionCRejectLow() {

  const low = qs('c-low');

  if (low) {
    low.remove();
  }
}

function optionCSave() {
  hide('c-draft');
  show('c-saved');
}

function optionCUndo() {
  hide('c-saved');
  show('c-draft');
}
