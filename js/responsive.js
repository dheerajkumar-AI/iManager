// this is js for live demo alert box - sign up form
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');
  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Your form has been submited successfully!', 'success');
  });
}

// this js for login module
const alertPlaceholder1 = document.getElementById('liveloginsuccessAlert');
const appendAlert1 = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');
  alertPlaceholder1.append(wrapper);
};

const alertTrigger1 = document.getElementById('loginsuccess');
if (alertTrigger1) {
  alertTrigger1.addEventListener('click', () => {
    appendAlert1('You are logged in successfully!', 'success');
  });
}