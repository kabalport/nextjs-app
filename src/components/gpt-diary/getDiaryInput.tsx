import styles from './getDiaryInput.module.css';

export default function GetDiaryInput() {

    return (
        <div>
            <div className={styles.title}>오늘의 일</div>
            <textarea
                placeholder="오늘 일어난 일들을 간단히 적어주세요."
                className={styles.textArea}
            ></textarea>
            <div className={styles.buttonContainer}>
                <button>
                    GPT 회고록을 작성해줘!
                </button>
                <button
                >
                    저장
                </button>
            </div>
            <canvas id="canvas" className={styles.canvas}></canvas>
        </div>
    )
}
