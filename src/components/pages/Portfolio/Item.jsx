function Item(props) {
    // console.log(props.thumbnail);
    return (
        <div
            className="group relative w-1/3 phone:w-full cursor-pointer rounded-lg overflow-hidden"
            onClick={props.handler}
        >
            <div className=" pt-[60%] bg-cover " style={{ backgroundImage: `url(${props.thumbnail})` }}></div>
            <p className="absolute top-1/2 left-1/2 translate-x-[-50%] z-10 translate-y-[-30%] group-hover:translate-y-[-50%] text-[22px] font-bold uppercase text-white opacity-0 group-hover:opacity-100 ease-[ease] transition-all duration-300">
                {props.name}
            </p>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-70 ease-[ease] transition-all duration-300"></div>
        </div>
    );
}

export default Item;
