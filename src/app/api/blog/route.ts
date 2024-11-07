import { NextResponse, NextRequest } from 'next/server'

// リクエストカウントを保持するための変数
// Note: このアプローチはサーバーの再起動時にリセットされます
let responseCount = 0

// カウンターをインクリメントするための関数
const incrementCounter = () => {
    responseCount += 1
    return responseCount
}

export async function GET(request: NextRequest) {
    try {
        // リクエストカウントをインクリメント
        const currentCount = incrementCounter()

        // リクエストの情報をログに記録
        // console.log(`API called - Response Count: ${currentCount}`)

        // レスポンスを返す
        return NextResponse.json({
            success: true,
            count: currentCount,
            message: 'Request processed successfully',
            timestamp: new Date().toISOString()
        })
    } catch (error) {
        // エラーハンドリング
        console.error('Error processing request:', error)
        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error',
                message: error instanceof Error ? error.message : 'Unknown error occurred'
            },
            { status: 500 }
        )
    }
}
