import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
}

const Modal = (props: ModalProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Modal, {}, [className])}>
            <div className={cls.overlay} />
        </div>
    );
};

export default Modal;
