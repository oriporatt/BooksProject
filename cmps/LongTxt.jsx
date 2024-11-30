const { useState} = React

export function LongTxt({txt,length}) {

    const [extendedClick,setExtended] =  useState(false)

    const isMoreThanMax = txt.length>length    
    const sectionA=txt.substr(0,length)
    const sectionB= txt.substr(-length, length)

    if (!isMoreThanMax) {
        return (

            <section className="long-txt">
                <p>
                  {txt}
                </p>
            </section>

        )
    }else {
        return (

            <section className="long-txt">
                <p>
                    {/* fold: */}
                  {!extendedClick && <span>{sectionA}</span>}
                  {!extendedClick && <span 
                    style={{color: "darkblue"}}
                    onClick={()=>setExtended(true)}
                    >(...Read More)</span>}
                    {/* extended: */}
                    {extendedClick && <span> {txt}</span>}
                    {extendedClick && <span 
                    style={{color: "darkgray"}}
                    onClick={()=>setExtended(false)}
                    >(...Read Less)</span>}
                </p>
            </section>

        )
    }
}
