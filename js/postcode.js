
function setupPostcodeAutocomplete(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    input.addEventListener('input', async () => {
        const query = input.value.trim();
        if (!query) {
            list.innerHTML = '';
            return;
        }

        try {
            const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(query)}/autocomplete`);
            const data = await res.json();
            list.innerHTML = '';

            if (data.result) {
                data.result.forEach(pc => {
                    const li = document.createElement('li');
                    li.textContent = pc;
                    li.addEventListener('click', () => {
                        input.value = pc;
                        list.innerHTML = '';
                    });
                    list.appendChild(li);
                });
            }
        } catch (err) {
            console.error(err);
        }
    });
}

setupPostcodeAutocomplete('collection-postcode', 'collection-postcode-suggestions');
setupPostcodeAutocomplete('delivery-postcode', 'delivery-postcode-suggestions');
