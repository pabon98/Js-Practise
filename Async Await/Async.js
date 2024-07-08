function resolveAfterTwoSeconds(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
         resolve("resolved")
        }, 2000)
    })
}

// async function always returns a promise though we did not use Promise Keyword
async function asyncCall (){
    console.log("calling")
    const result = await resolveAfterTwoSeconds()
    console.log(result)
}

asyncCall()