import React from 'react'
import s from './FormControl.module.css'
import {useState, useEffect} from 'react';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <textarea {...input} {...props} />
            {hasError && <div className={s.errorMessage}>{meta.error}</div>}
        </div>
    )
}

export const Input = ({input, meta, labelText, ...props}) => {

    const [value, setValue] = useState("");

    useEffect(() => {
    }, [value]);


    let onChange = (e) => {
        setValue(e.target.value)
    }

    const hasError = meta.touched && meta.error;

    return (
        <>
            <div className={s.fieldSlot}>
                <input {...input} {...props}
                       id="email"
                       value={value}
                       onChange={onChange}
                       autoComplete="off"
                       className={s.input}
                       type={props.type}/>
                <label className={s.labelInput + " " + (hasError ? s.labelError : "")
                + " " + (value ? s.transformLabel : "")}
                       htmlFor="email"
                >
                    {labelText}
                </label>

            </div>
            {hasError && <div className={s.textFieldDetail}>{meta.error}</div>}
        </>

    )
};


