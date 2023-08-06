document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id;

    remove(id).then(() => {
      event.target.closest('li').remove();
    });
  } else if (event.target.dataset.type === 'edit') {
    const id = event.target.dataset.id;
    const li = event.target.closest('li');
    const span = li.querySelector('span');
    console.log('span', span);

    let title = span.innerText;
    console.log('title', title);

    title = prompt('Введите новое название', title);

    if (title !== null) {
      edit(id, title).then(() => {
        span.innerText = title;
      });
    }
  }
});

async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' });
}

async function edit(id, title) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: title }),
  };
  await fetch(`/${id}`, requestOptions);
}
