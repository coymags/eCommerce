import { create } from 'zustand'

const useStore = create((set) => ({


    // Set Register Input field
    RegisterInput: {
        email: '',
        password: '',
        retypepassword: '',
    },

    setRegisterInput: (name, value) =>
        //state is RegisterInput state and setRegisterInput state target to get the name and value
        set((state) => (
            //console.log(state),
            { RegisterInput: {...state.RegisterInput, [name]: value},}
            )
        ),

    resetForm: () => set({ RegisterInput: {email: '', password: '', retypepassword: ''}})

    

    

}))

export default useStore