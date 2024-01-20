import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ee19f411f1619f6e531b6ab95b7f06b3~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705903200&x-signature=BhX%2Bz0aHmY7RjonwCCkYdrlzJC4%3D"
                alt="avata"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('userName')}>AAAA</span>
            </div>
        </div>
    );
}

export default AccountItem;
