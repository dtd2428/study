/* fetch·모듈·빌드 없이 file://와 GitHub Pages 양쪽에서 과목을 불러옵니다. */
(() => {
  'use strict';
  window.STUDY_BANKS = [];
  window.STUDY_LOAD_ERRORS = [];
  window.STUDY_REMOVED = {};
  const assetVersion = new URL(document.currentScript.src).searchParams.get('v');

  function loadScript(path) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      const url = new URL(path, document.baseURI);
      if (assetVersion) url.searchParams.set('v', assetVersion);
      script.src = url.href;
      script.onload = resolve;
      script.onerror = () => reject(new Error(path));
      document.head.append(script);
    });
  }

  window.STUDY_READY = (async () => {
    const ids = new Set();
    for (const entry of window.STUDY_SUBJECTS || []) {
      const before = [...window.STUDY_BANKS];
      try {
        if (!entry.id || ids.has(entry.id)) throw new Error('중복 과목 ID');
        await loadScript(entry.script);
        const added = window.STUDY_BANKS.slice(before.length);
        if (added.length !== 1 || added[0].id !== entry.id) {
          throw new Error('과목 ID 불일치');
        }
        window.STUDY_VALIDATE_BANKS(added);
        ids.add(entry.id);
      } catch {
        window.STUDY_BANKS = before;
        window.STUDY_LOAD_ERRORS.push(String(entry.script || entry.id));
      }
    }

    try {
      await loadScript('data/overrides.js');
      if (!Array.isArray(window.STUDY_OVERRIDES)) throw new Error('잘못된 배포 문제은행');
      if (window.STUDY_OVERRIDES.length) window.STUDY_VALIDATE_BANKS(window.STUDY_OVERRIDES);
      for (const bank of window.STUDY_OVERRIDES) {
        const index = window.STUDY_BANKS.findIndex(item => item.id === bank.id);
        if (index >= 0) window.STUDY_BANKS[index] = bank;
        else window.STUDY_BANKS.push(bank);
      }
    } catch {
      window.STUDY_LOAD_ERRORS.push('data/overrides.js');
    }
    try {
      await loadScript('data/deletions.js');
      for (const bank of window.STUDY_BANKS) {
        const removed = window.STUDY_REMOVED[bank.id] || [];
        bank.questions = bank.questions.filter(q => !removed.includes(q.id));
      }
    } catch {
      window.STUDY_LOAD_ERRORS.push('data/deletions.js');
    }
  })();
})();
