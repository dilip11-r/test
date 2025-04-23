 const options = document.querySelectorAll('.bundle-option');
  const radios = document.querySelectorAll('input[type="radio"][name="bundle"]');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      options.forEach(opt => opt.classList.remove('active'));
      radio.closest('.bundle-option').classList.add('active');
    });
  });
