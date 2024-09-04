function Section(props) {
  return (
    <div className="h-[300px] w-[300px] flex flex-col justify-center items-center movie mt-5">
      <img
        src={props.data.img}
        alt={props.data.alt}
        className="h-[250px] w-[200px] object-fill hover:shadow-2xl hover:shadow-gray-500 cursor-pointer rounded-lg"
      />
      <p className="mt-3 font-semibold cursor-pointer hover:text-orange-600">
        {props.data.name}
      </p>
    </div>
  );
}

export default Section;
