function SkillItem(props) {
    return (
        <div className="flex flex-col justify-center w-1/4 phone:w-1/2 items-center">
            <div className="w-[120px] h-[120px] flex justify-center items-center mb-1 rounded-full bg-toggle hover:scale-[1.05] ease-[ease] duration-300 transition-all">
                <div className="w-[60%] h-[60%] bg-cover" style={{ backgroundImage: 'url(' + props.image + ')' }}></div>
            </div>
            <h3 className="text-white text-[14px] font-normal uppercase">{props.name}</h3>
        </div>
    );
}

export default SkillItem;
