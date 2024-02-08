import { dataAccounts } from "../../data/data";
import Account from "../../components/Account/Account";
import { useSelector } from 'react-redux'

function User() {
    const selectUser = (state) => state.getUser.user.body
    const user = useSelector(selectUser)
    const firstName = user ? user.firstName : '';
    const lastName = user ? user.lastName : '';
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName} </h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {dataAccounts.map(dataAccount =>
                <Account
                    accountTitle={dataAccount.accountTitle}
                    accountAmount={dataAccount.accountAmount}
                    accountAmountDescription={dataAccount.accountAmountDescription}
                    key={dataAccount.id}
                />
            )}
        </main>
    )
}

export default User;
