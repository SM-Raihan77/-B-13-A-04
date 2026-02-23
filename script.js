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

