export const InputFieldWithLabel = ({ title, labelStyleClass = '', inputStyleClass = '', inputData }) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={inputData.name} className={labelStyleClass}>
                {title}
            </label>

            <input
                id={inputData.id && inputData.id}
                type={inputData.type}
                name={inputData.name}
                value={inputData.value}
                onChange={inputData.onChange}
                placeholder={inputData.placeholder}
                className={inputStyleClass}
            />
        </div>
    )
}