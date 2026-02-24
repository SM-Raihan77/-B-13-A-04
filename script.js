//    < ---- step-01 ----->

let interviewList = [];
let rejectedList = [];
let currentStatus = 'tab-all';

const totalDisplay = document.getElementById('total-count');
const interviewDisplay = document.getElementById('interview-count');
const rejectedDisplay = document.getElementById('rejected-count');
const sectionCountDisplay = document.getElementById('section-count');

const allCardSection = document.getElementById('allCards');
const filterSection = document.getElementById('filtered-section');

// --- Step 02: Calculate Count ---

function calculateCount() {
    totalDisplay.innerText = allCardSection.children.length;
    interviewDisplay.innerText = interviewList.length;
    rejectedDisplay.innerText = rejectedList.length;

}
calculateCount();


// <--- Step 03: Tab Toggle logic --->

function toggleStyle(id) {

    // Style reset

    const tabs = ['tab-all', 'tab-interview', 'tab-rejected'];
    tabs.forEach(tabId => {
        const btn = document.getElementById(tabId);
        btn.classList.replace('bg-blue-600', 'bg-white');
        btn.classList.remove('text-white');
    });

    // Active style add

    const selected = document.getElementById(id);
    selected.classList.replace('bg-white', 'bg-blue-600');
    selected.classList.add('text-white');

    currentStatus = id;

    // Section show/hide

    if (id === 'tab-all') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        sectionCountDisplay.innerText = `${allCardSection.children.length} total jobs`;
    }

    else if (id === 'tab-interview') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
        sectionCountDisplay.innerText = `${interviewList.length} interview jobs`
    }
    else if (id === 'tab-rejected') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        sectionCountDisplay.innerText = `${rejectedList.length} rejected jobs`;
        renderRejected();
    }
}



// <--- Step 4: Event Delegation --->


document.body.addEventListener('click', function (event) {
    const card = event.target.closest('.card');
    if (!card) return;

    const company = card.querySelector('.companyName').innerText;

    // <---status change--->

    if (event.target.classList.contains('interview-btn')) {
        card.querySelector('.status').innerText = 'INTERVIEW';
        card.querySelector('.status').className = 'status bg-emerald-50 text-emerald-700 inline-block px-3 py-1 rounded-md text-[10px] font-bold mb-4';

        //  Clone a card

        const cardClone = card.cloneNode(true);

        if (!interviewList.find(item => item.querySelector('.companyName').innerText === company)) {
            interviewList.push(cardClone);
        }

        rejectedList = rejectedList.filter(item => item.querySelector('.companyName').innerText !== company);

        calculateCount();
    }

    else if (event.target.classList.contains('rejected-btn')) {
        card.querySelector('.status').innerText = 'Rejected';
        card.querySelector('.status').className = 'status bg-red-50 text-red-700 inline-block px-3 py-1 rounded-md text-[10px] font-bold mb-4';


        const cardClone = card.cloneNode(true);

        if (!rejectedList.find(item => item.querySelector('.companyName').innerText === company)) {
            rejectedList.push(cardClone);
        }

        interviewList = interviewList.filter(item => item.querySelector('.companyName').innerText !== company);

        calculateCount();
    }

    // <--- delete btn--->
    else if (event.target.closest('.btn-delete')) {
        card.remove();
        interviewList = interviewList.filter(item => item.querySelector('.companyName').innerText !== company);
        rejectedList = rejectedList.filter(item => item.querySelector('.companyName').innerText !== company);
        calculateCount();
    }


    if (currentStatus === 'tab-interview') {
        renderInterview();
    } else if (currentStatus === 'tab-rejected') {
        renderRejected();
    }

    if (currentStatus === 'tab-interview') {
        renderInterview();
        sectionCountDisplay.innerText = `${interviewList.length} interview jobs`;

    } else if (currentStatus === 'tab-rejected') {
        renderRejected();

        sectionCountDisplay.innerText = `${rejectedList.length} rejected jobs`;

    } else if (currentStatus === 'tab-all') {

        sectionCountDisplay.innerText = `${allCardSection.children.length} total jobs`;
    }



});


// --- Step 5: Render Functions ---
function renderInterview() {
    filterSection.innerHTML = '';
    interviewList.forEach(cardElement => {
        filterSection.appendChild(cardElement);
    });
}

function renderRejected() {
    filterSection.innerHTML = '';
    rejectedList.forEach(cardElement => {
        filterSection.appendChild(cardElement);
    });
}


