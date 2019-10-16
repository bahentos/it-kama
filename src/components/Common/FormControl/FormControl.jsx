import React from 'react'
import s from './FormControl.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <textarea {...input} {...props} />
            {hasError && <div className={s.errorMessage}>{meta.error}</div>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (

        <div className={s.inputControl}>
            <div className={s.fieldSlot}>
                <input {...input} {...props}
                       id="email"
                       autocomplete="off"
                       className={`${s.input}`}
                       type={props.type}
                />
                <label className={s.labelInput + " " + (hasError ? s.labelError : "")}
                       htmlFor="email"
                >
                    {props.labelText}
                </label>

            </div>
            {hasError && <div className={s.textFieldDetail}>{meta.error}</div>}
        </div>

    )
};


