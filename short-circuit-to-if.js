// this plugin does not handle multi-logical-expression-combined
module.exports = function ({ types: t }) {
    return {
        visitor: {
            LogicalExpression(path) {
                if (t.isExpressionStatement(path.parentPath.node)) {
                    const rightExpression = path.node.right

                    if (t.isCallExpression(rightExpression)
                        || t.isAssignmentExpression(rightExpression)
                        || t.isUpdateExpression(rightExpression)
                        || (t.isUnaryExpression(rightExpression) && rightExpression.operator === 'delete')
                    ) {
                        const rightExpressionPath = path.get('right', path.node)

                        rightExpressionPath.remove()

                        path.parentPath.replaceWith(t.ifStatement(path.node, t.expressionStatement(rightExpression)))
                    }
                }
            }
        }
    }
}
