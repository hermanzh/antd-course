// 生命周期方法
class LifeCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    // 组件挂载后自动调用
    componentDidMount() {

    }

    // 组件卸载前自动调用
    componentWillUnmount() {

    }

    // UI每次更新后调用（即组件挂载成功以后，每次调用render方法，都会触发）
    componentDidUpdate() {

    }

    //不常用
    // 1. shouldComponentUpdate(nextProps, nextState) 每当this.props或this.stats有变化，在render方法执行之前，就会调用
    // 2. getDerivedStateFromProps(props, state)
    // 3. getSnapshotBeforeUpdate()
}