async function shellSort(){
    console.log('In shellSort()');
    const ele = document.querySelectorAll(".bar");
    let n = ele.length;
    for(let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)){
        console.log('In gap loop');
        for(let i = gap; i < n; i++){
            console.log('In ith loop');
            let temp = parseInt(ele[i].style.height);
            let j = i - gap;
            ele[i].style.background = 'blue';
            while(j >= 0 && parseInt(ele[j].style.height) > temp){
                console.log('In while loop');
                ele[j].style.background = 'red';
                ele[j + gap].style.background = 'red';
                await waitforme(delay);
                ele[j + gap].style.height = ele[j].style.height;
                j -= gap;
            }
            ele[i].style.background = 'green';
            ele[j + gap].style.background = 'green';
            await waitforme(delay);
            ele[j + gap].style.height = `${temp}px`;
            ele[j + gap].style.background = 'cyan';
        }
    }
}

const shellSortbtn = document.querySelector(".shellSort");
shellSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await shellSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
