
import Image from "next/image"
import './Features.css'

export default function Features() {


    return (
        <div className="container-features">
            <h1 className="h1-container-features">Neste bairro, não há agência melhor. Garantimos.</h1>
            <p className="p-container-features">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="features">
                {/*CARD-1 */}
                <div className="feature">
                    <Image className="icon" src="/images/icon.svg" width="100" height="100" alt="icon" />
                    <h1 className="h1-card-feature">Digital Strategy</h1>
                    <p className="p-card-feature">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                {/*CARD-2 */}
                <div className="feature">
                    <Image className="icon" src="/images/icon.svg" width="100" height="100" alt="icon" />
                    <h1 className="h1-card-feature">Estratégia Digital</h1>
                    <p className="p-card-feature">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                {/*CARD-3 */}
                <div className="feature">
                    <Image className="icon" src="/images/icon.svg" width="100" height="100" alt="icon" />
                    <h1 className="h1-card-feature">Social Midía</h1>
                    <p className="p-card-feature">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                {/*CARD-4 */}
                <div className="feature">
                    <Image className="icon" src="/images/icon.svg" width="100" height="100" alt="icon" />
                    <h1 className="h1-card-feature">Digital Strategy</h1>
                    <p className="p-card-feature">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>
        </div>
    )
}