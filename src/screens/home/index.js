import React, {useState} from 'react'
import Header from '../../components/header'
import {
    ContainerPage,
    Results,
    InputForm,
    InsideContainer,
    FormContent,
    ErrorLabel,
    FieldText,
    Title,
    ContentResults
} from './styles'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'

const HomePage = () => {

// State of results
    const [results, setResults] = useState({})

// Input validations
    const validateForm = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Name short!')
    .required('*Required Field!'),
    email: Yup.string()
    .email('Use a valid e-mail')
    .required('*Required Field!'),
    nu_phone: Yup.string()
    .max(11, 'Invalid number, use a brazilian format')
    .required('*Required Field!')
})

// Function to submit the input data
    const handleSubmit = ({name, email, nu_phone}, {resetForm}) => {
        setResults({
            name,
            email,
            nu_phone
        })
        resetForm();
    }
    return (
        <>
        <Header/>
        <ContainerPage>
            <InsideContainer>
                <InputForm>
                    <Formik 
                    initialValues={{
                        name: '',
                        email: '',
                        nu_phone: '',
                    }}
                    validationSchema={validateForm}
                    onSubmit={handleSubmit}
                    >
                    {({errors, touched, handleSubmit}) => (
                        <Form onSubmit={handleSubmit}>
                        <FormContent>
                            <h3>Full name</h3>
    
                            <div>
                                <FieldText
                                    type="name"
                                    className="formNameStyle"
                                    name="name"
                                     required/>
                                    {errors.name && touched.name ? (
                                    <ErrorLabel><p>{errors.name}</p></ErrorLabel>
                                    ) : null}
                            </div>
                        </FormContent>
    
                        <FormContent>
                            <h3>E-mail</h3>
    
                            <div>
                                <FieldText
                                    type="email"
                                    className="formNameStyle"
                                    name="email"
                                    required/>
                                    {errors.username && touched.username ? (
                                    <ErrorLabel><p>{errors.username}</p></ErrorLabel>
                                ) : null}
                            </div>
                            
                        </FormContent>
    
                        <FormContent>
                            <h3>Phone (please, use a brazilian number)</h3>
    
                            <div>
                                <FieldText
                                //component={renderPrice}
                                className="formNameStyle"
                                name="nu_phone"
                                required/>
                                    {errors.nu_phone && touched.nu_phone ? (
                                    <ErrorLabel><p>{errors.nu_phone}</p></ErrorLabel>
                                    ) : null}
                            </div>
                        </FormContent>
                        <FormContent>
                                <button
                                type="submit" 
                                className="buttonCadastrar"
                                >
                                    <p>GET IN TOUCH</p>
                                </button>
                        </FormContent>
                        </Form>
                    )}
                    </Formik>
                </InputForm>
                {results.name && results.email && results.nu_phone && 
                <Results>
                    <Title>Hi, {results.name}, here's your informations:</Title>

                    <ContentResults>
                    <h3>Your full name:</h3>
    
                    <div>
                        <p>{results.name}</p>
                    </div>
                    </ContentResults>     

                    <ContentResults>
                    <h3>Your e-mail:</h3>
    
                    <div>
                        <p>{results.email}</p>
                    </div>
                    </ContentResults>      

                    <ContentResults>
                    <h3>Your phone:</h3>
    
                    <div>
                        <p>{results.nu_phone}</p>
                    </div>
                    </ContentResults>                    
                </Results>
                }
            </InsideContainer>
        </ContainerPage>
        </>
    )
}

export default HomePage;