export function mouseActions(element: Element, functionSet: Function) {

    element.addEventListener('mouseover', (event) => {
        if (event.target != null) {
            functionSet((event.target as HTMLElement).id);
        }
    })
    element.addEventListener('mouseout', () => {
        functionSet('');
    })
    element.addEventListener('click', (event) => {
        if (event.target != null) {
            functionSet((event.target as HTMLElement).id);
        }
    })
    element.addEventListener('touchstart', (event) => {
        if (event.target != null) {
            functionSet((event.target as HTMLElement).id);
            setTimeout(() => {
                functionSet('');
            }, 2000);
        }
    })

    element.addEventListener('touchend', () => {
        functionSet('');
    })


}