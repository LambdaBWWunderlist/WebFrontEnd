import React from 'react';

// {
//     name: STRING; // not nullable, 128 chars max
//     body: TEXT; // nullable
//     completed: BOOLEAN; // not nullable, defaults to false
//     recurring: STRING; // defaults to null, must be null, 'daily', 'weekly' or 'monthly'
//     due_date: TIMESTAMP; // nullable, timestamp format: 'YYYY-MM-DD HH:MM:SS' (UTC)
//   }



export default function ItemForm(props){

    const {
        values,
        onSubmit,
        onInputChange,
        disabled,
        errors,
      } = props

    // useEffect(() => {
    //     itemSchema.isValid(formValues).then(valid => {
    //         setDisabled(!valid);
    //     }, [formValues])
    // })


    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label> Task Name
                    <input 
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label> Description
                    <input 
                        value={values.body}
                        onChange={onInputChange}
                        name='body'
                        type='text'
                    />
                </label>

                <label> Recurring Event?
                <select
                    onChange={onInputChange}
                    value={values.recurring}
                    name='recurring'
                >
                    <option value='Single Event'> Single Event </option>
                    <option value='Daily'>Daily</option>
                    <option value='Weekly'>Weekly</option>
                    <option value='Monthly'>Monthly</option>
                </select>
                </label>
            </div>
            <div className="form-group submit">
                <div className="errors">
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
                <button id="submitBtn" disabled={disabled}>
                    submit
                </button>
            </div>
        </form>
    )

}