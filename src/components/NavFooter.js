import en from '../language/english.json';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const date = new Date();

export default function NavFooter() {
    return (
        <footer className="content">
            <div className="text-body-secondary py-5">
                <p className="float-end mb-1"><span>{en.back_to_top}</span></p>
                <p className="mb-1">{en.moto} <sup>&copy;</sup> {date.getFullYear()}</p>
            </div>
        </footer>
    )
}
