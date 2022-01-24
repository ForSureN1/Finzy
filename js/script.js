document.addEventListener('DOMContentLoaded', () => {
    function descTabs() {
        let descParentTabs = document.querySelector('.desc__tabs')
        let descTabs = document.querySelectorAll('.desc__tab')
        descParentTabs.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('desc__tab')) {
                // console.log(target)
                descTabs.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        })
    }


    function descTabsContent() {
        let btn = document.querySelectorAll('.desc__tab');
        let block = document.querySelectorAll('.desc__info-tab')
        btn.forEach((key, index, array) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                })
            })
        })
    }
    let desc = document.querySelector('.desc')
    if (desc) {
        descTabs();
        descTabsContent();
    }


    function appTabs() {
        let descParentTabs = document.querySelector('.application__tabs')
        let descTabs = document.querySelectorAll('.application__tab')
        descParentTabs.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('application__tab')) {
                // console.log(target)
                descTabs.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        })
    }
    appTabs();

})