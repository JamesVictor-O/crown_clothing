import "./form-input.scss"
export default function FormInput({handleChange,label, ...otherProps}){
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps}/>
            {
                label ?
                    
                (<label className={`${
                        otherProps.value ? 'shrink' : ''
                        } form-label` }
                    >
                   {label}
                </label>)
                : null
            }
        </div>
    )
} 