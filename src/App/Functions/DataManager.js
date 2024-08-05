export const SaveData = () => {
    let NewList = [];

    document.querySelectorAll('.app-input-parent[inputid]').forEach(element => {
        let Per = element.querySelector('.app-input-per')

        NewList = [...NewList, {
            Note: Number(element.querySelector('.app-input-input').value),
            id: Number(element.getAttribute('inputid')),
            per: Per.value.replace('%', ''),
        }]
    })

    return NewList;

}
