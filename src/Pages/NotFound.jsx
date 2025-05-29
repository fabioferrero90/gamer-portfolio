import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'Styles/NotFound.css'
import i18next from 'i18next'
import { useGlobalContext } from 'Contexts/GlobalContext'

const NotFound = () => {

    const { lang } = useGlobalContext()
    const { t } = i18next
    i18next.init({
        lng: lang,
        resources: {
            en: {
                translation: {
                    "You Died": "You Died",
                    "Or maybe this part is not complete.": "Or maybe this part is not complete.",
                    "Back to the main menu": "Back to the main menu"
                }
            },
            it: {
                translation: {
                    "You Died": "Sei morto",
                    "Or maybe this part is not complete.": "Oppure questa sezione va completata.",
                    "Back to the main menu": "Torna al menu principale"
                }
            }
        }
    })

    
    const navigate = useNavigate()

    return (
        <main className="h-[100dvh] select-none">
            <div className="death-background h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-end">
                    <p className="text-red-500 text-9xl pb-12 text-center">{t('You Died')}</p>
                </div>
                <span className="text-lg text-white">
                    {t('Or maybe this part is not complete.')}
                </span>
                <button
                    className="bg-yellow-100 text-black p-3 rounded-2xl mt-4 cursor-pointer"
                    onClick={() => navigate("/main-menu")}
                >
                    <span className="font-bold">{t('Back to the main menu')}</span>
                </button>
            </div>
        </main>
    )
}

export default NotFound