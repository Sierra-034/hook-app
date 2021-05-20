import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'samuel',
        email: 'samuel.gomez.balderas@gmail.com'
    };

    test('Debe regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, resetValues] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof resetValues).toBe('function');
    });

    test('Debe cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({target: {name: 'name', value: 'patricio'}});
        });

        const [values] = result.current;
        expect(values.name).toBe('patricio');
    });

    test('Debe reestablecer el formulario con RESET', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange, resetValues] = result.current;

        act(() => {
            handleInputChange({target: {name: 'name', value: 'Bob Esponja'}});
            resetValues();
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
});
