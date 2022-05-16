function once(fn){
    let result;
    let revoked = false;

    return (...args)=>{
        if(revoked)return result;
        const res = fn(...args);
        result = res;
        revoked = true;
        return res
    }
}