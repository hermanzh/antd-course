import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;

class TreeTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedKeys: [],
        }
    }

    render() {
        <Tree
          defaultExpandedKeys={this.state.expandedKeys}
        >
            <TreeNode title='根节点1' key='0-0'>
                <TreeNode title='叶子' key='0-0-0'/>
                <TreeNode title='叶子' key='0-0-1'/>
            </TreeNode>
        </Tree>
    }
} 