import Dinesh from "./assets/b.jpg";
export const UserProfile = () => {
  return (
    <div className="card">
      <div className="img">
        <img src={Dinesh} alt="" width={"150px"} />
      </div>
      <div className="info">
        <h1 className="text-danger">Dinesh Budhathoki</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quisquam
          recusandae, voluptatibus possimus similique exercitationem, porro
          nesciunt, impedit hic deserunt iure laudantium architecto ullam
          asperiores assumenda ut modi adipisci minima?
        </p>
      </div>
    </div>
  );
};
