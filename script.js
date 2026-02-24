    //    < ---- step-01 ----->

        let interviewList = [];
        let rejectedList = [];
        let currentStatus = 'tab-all';

        const totalDisplay = document.getElementById('total-count');
        const interviewDisplay = document.getElementById('interview-count');
        const rejectedDisplay = document.getElementById('rejected-count');

        const allCardSection = document.getElementById('allCards');
        const filterSection = document.getElementById('filtered-section');

        // --- Step 02: Calculate Count ---

        function calculateCount() {
            totalDisplay.innerText = allCardSection.children.length;
            interviewDisplay.innerText = interviewList.length;
            rejectedDisplay.innerText = rejectedList.length;
        
        }
        calculateCount();

        
        // --- Step 3: Tab Toggle logic ---
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
            } else if (id === 'tab-interview') {
                allCardSection.classList.add('hidden');
                filterSection.classList.remove('hidden');
                renderInterview();
            } else if (id === 'tab-rejected') {
                allCardSection.classList.add('hidden');
                filterSection.classList.remove('hidden');
                renderRejected();
            }
        }


