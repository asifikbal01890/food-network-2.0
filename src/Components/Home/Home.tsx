import Image from "next/image";
import ImgOne from '../../../public/assets/homePageImage/Thumbnail-01.png';
import ImgTwo from '../../../public/assets/homePageImage/Thumbnail-02.png';
const Home = () => {
    return (
        <div className="flex mt-[15px] ml-4">
            <div>
                <div></div>
            </div>
            <div className="flex items-start justify-between">
                <div>
                    <h1>Health benefits of an avocado</h1>
                    <h3>Supports eye health:</h3>
                    <p>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                    <h3>Supports eye health: </h3>

                </div>
                <div>
                <Image
                    src={ImgOne}
                    alt="menuOneIcon"
                    width="42.52"
                    height="42.52"
                />
                </div>
            </div>
        </div>
    );
};

export default Home;