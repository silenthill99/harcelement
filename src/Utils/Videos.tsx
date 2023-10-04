type VideoProps = {
    id: string;
    name: string;
}

export const Videos : React.FC<VideoProps> = ({id, name}) => {
    return(
        <div className="flex items-center flex-col">
            <h2 className="text-2xl font-bold m-1">{name}</h2>
            <iframe width="666" height="533" src={"https://www.youtube.com/embed/" + id} title={name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}