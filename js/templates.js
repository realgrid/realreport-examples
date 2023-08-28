const AUTHO_DEV = 'clln2yj750005yc1u5avw9num';
const AUTHO_PROD = 'cllq2kxjr0001l20fkzxq6cm1';

function getTemplateList(url, callback) {
  fetch(url, {
    method: 'get',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: isDev ? AUTHO_DEV : AUTHO_PROD,
    },
  })
    .then(function (r) {
      return r.json();
    })
    .then(function (ret) {
      if (ret) {
        const { templateList } = ret;
        if (typeof callback === 'function') callback(templateList);
      }
    })
    .catch(function (e) {
      console.log(e);
    });
}

function getTemplate(url, callback) {
  fetch(url, {
    method: 'get',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: isDev ? AUTHO_DEV : AUTHO_PROD,
    },
  })
    .then(function (r) {
      return r.json();
    })
    .then(function (ret) {
      if (ret) {
        const { template } = ret;
        // console.log(template.form);
        if (typeof callback === 'function') callback(JSON.parse(template.form));
      }
    })
    .catch(function (e) {
      console.log(e);
    });
}
