class Error {
    render() {
        const html = `
            <div class="error-container">
                <div class="error-message">
                    <h3>Немає доступу!</h3>
                    <p>Спробуйте зайти пізніше</p>
                </div>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
