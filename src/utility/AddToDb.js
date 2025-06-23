const getStoredReadList=()=>{
 const storedListStr = localStorage.getItem('readList');
 if(storedListStr){
    const storedList = JSON.parse(storedListStr);
     return storedList;
 }
 else{
    return [];
 }
}

const addToStoredReadList =(id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        alert('already exists in the read List');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        alert(' This book is added to your Read List')    }
}

export {addToStoredReadList};