window.addEventListener('beforeinstallprompt', (e) => {
  e.userChoice.then((choiceResult) => {
    console.log(choiceResult.outcome);

    if (choiceResult.outcome === 'dismissed') {
      console.log('User dont want to install :(');
    } else {
      console.log('User installed the PWA \\m/');
    }
  });
});
