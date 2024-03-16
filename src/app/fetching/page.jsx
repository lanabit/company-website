const onFetchUser = async() => {
  try {
    let res = await fetch('https://randomuser.me/api/?results=10&seed=abc',{
      method: 'get',
      cache: 'no-store'
    })
    res = await res.json()
    //console.log("res", res)
    //console.log("name", res.results[0].name)
    return res
  } catch (error) {
    console.log(error)
  }
}

export default async function Fetching() {
  let a = await onFetchUser()
  a = a.results.slice(0,3)
  return(
    <div className="mt-32">
      {a.map((x,i) => {
        return(
          <div>
            {x.email}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-pink-200 fill-current" viewBox="0 0 16 16"><path d="M2.629 1.581 4.727 3.68h5.065L7.693 1.58H2.63Zm7.159 0 4.63 4.631V1.828a.247.247 0 0 0-.246-.247H9.788ZM14.112 8 11.58 5.468 9.047 8l2.533 2.532L14.112 8Zm-1.485 3.58 1.792 1.791V9.788l-1.792 1.792Zm.744 2.839L8 9.047 2.629 14.42H13.37ZM1.581 13.37 6.953 8 1.58 2.629V13.37ZM8 6.953 9.792 5.16H6.208L8 6.953ZM.1 1.828C.1.874.874.1 1.828.1h12.344c.954 0 1.728.774 1.728 1.728v12.344c0 .954-.774 1.728-1.728 1.728H1.828A1.728 1.728 0 0 1 .1 14.172V1.828Z"/></svg>
          </div>
        )
      })}
    </div>
  )
}