function computeTotal() {
    const hourInputs = document.querySelectorAll('.hourInput');
    let total = 0;

    hourInputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            total += value;
        }
    });
    document.getElementById('totalHoursDisplay').textContent = total;

    displayActivities(total);
}

function displayActivities(hours) {
    const activityDiv = document.getElementById('activityDisplay');
    
    activityDiv.innerHTML = '';

    let activityText = '';

    if (hours <= 0) {
        activityText = '<p>Please enter a valid number of hours greater than 0.</p>';
    } else if (hours <= 2) {
        activityText = `
            <h2 class = "activitiesHeader">Short Activities (${hours} Hours)</h2>
            <ul>
                <li><strong>Trampoline Parks:</strong> High-energy bouncing at Bounce NZ or JUMP.</li>
                <li><strong>Indoor Rock Climbing:</strong> Quick bouldering or Clip 'n Climb challenges.</li>
                <li><strong>Laser Tag or Mini Golf:</strong> Glow-in-the-dark mini golf matches.</li>
                <li><strong>Local Swimming Pools:</strong> Short swim sessions or water play at community pools.</li>
                <li><strong>Art & Craft Workshops:</strong> Quick pottery or painting classes at local studios.</li>
            </ul>`;
    } else if (hours <= 5) {
        activityText = `
            <h2 class = "activitiesHeader">Half-Day Experiences (${hours} Hours)</h2>
            <ul>
                <li><strong>Adventure Parks:</strong> High-ropes courses at Tree Adventures.</li>
                <li><strong>Museums:</strong> Hands-on science exploration at MOTAT or Te Papa.</li>
                <li><strong>Water Parks:</strong> Hydroslides at local community aquatic centres.</li>
                <li><strong>Local Farm Visits:</strong> Interactive farm tours and animal feeding experiences.</li>
                <li><strong>Kayaking or Paddleboarding:</strong> Half-day water adventures on nearby rivers or lakes.</li>
            </ul>`;
    } else if (hours <= 12) {
        activityText = `
            <h2 class = "activitiesHeader">Full-Day Adventures (${hours} Hours)</h2>
            <ul>
                <li><strong>Wildlife Sanctuaries:</strong> Auckland Zoo or Orana Wildlife Park trails.</li>
                <li><strong>Regional Park Hiking:</strong> Day treks on local DOC bush tracks.</li>
                <li><strong>Snow Sports:</strong> Day trips to Mt Ruapehu or Cardrona ski fields.</li>
                <li><strong>City Tours:</strong> Guided walking or bus tours exploring local history and culture.</li>
                <li><strong>Fishing Trips:</strong> Full-day guided fishing excursions on rivers or coastal waters.</li>
            </ul>`;
    } else {
        activityText = `
            <h2 class = "activitiesHeader">Overnight Experiences (${hours} Hours)</h2>
            <ul>
                <li><strong>DOC Hut Tramping:</strong> Overnight hike into a regional Department of Conservation hut.</li>
                <li><strong>Marae Noho (Overnight Marae Stay):</strong> A deep cultural experience learning Māori protocols, carving, weaving, and sleeping together in the wharenui.</li>
                <li><strong>School Camps & Adventure Lodges:</strong> Action-packed 24-hour camps featuring flying foxes, raft building, archery, and campfire cooking at local outdoor education centres.</li>
                <li><strong>Inter-Island Coastal Ferry Trip:</strong> A full overnight getaway taking the Interislander or Bluebridge ferry across the Cook Strait to camp or explore the other island.</li>
            </ul>`;
    }

    activityDiv.innerHTML = activityText;
}