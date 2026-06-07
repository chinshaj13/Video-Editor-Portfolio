export default function Work(){
    const landscape=[
        {id: "AHp2dF969Ik"},
        {id: "5wJ7Gr-m4Wg"},
    ];

    const portrait=[
        {id: "qoDcyiBD3HQ"},
        {id: "T9ohuoK__r0"},
        {id: "iE0kFNO8U84"},
        {id: "YC0tpAZ4YDI"},
        {id: "QeW-eMPo4u0"},
        {id: "TuwyKj6Fuqo"},
    ];

return(
    <section className="work">
        <h2 className="work-title">Featured Work</h2>

        <div className="work-landscape">
            {landscape.map((v)=>(
                <iframe
                key={v.id}
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.id}
                allowfullscreen
                className="video-landscape"
                />
            ))}
        </div>
        <div className="work-portrait">
            {portrait.map((v)=>(
                <iframe
                key={v.id}
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.id}
                allowfullscreen
                className="video-portrait"
                />
            ))}
        </div>
    </section>
);
}