import { BasicBtn } from "./BasicBtn"
import { InputFieldWithLabel } from "./InputFieldWithLabel"

export const Form = ({ formStyleClass = '', handleSubmit, formData }) => {
    return (
        <form
            onSubmit={handleSubmit}
            className={formStyleClass}
        >
            {formData.inputFields.map((data, index) => (
                <InputFieldWithLabel
                    key={index}
                    title={data.title}
                    labelStyleClass={data.labelStyleClass}
                    inputStyleClass={data.inputStyleClass}
                    inputData={data.inputData}
                />
            ))}

            <div className='flex items-center justify-between'>
                {formData.buttons.map((data, index) => (
                    <BasicBtn
                        key={index}
                        btnData={data}
                    />
                ))}
            </div>
        </form>
    )
}