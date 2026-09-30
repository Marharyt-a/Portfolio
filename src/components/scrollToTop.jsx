import "../css/scrollToTop.css"

function ScrollToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button className="scroll-to-top" onClick={scrollToTop}>
            ↑
        </button>
    );
}

export default ScrollToTop;