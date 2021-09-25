class BinaryHeap {
    constructor() {

        this.heap = [];
    }

        size() {
            return this.heap.length;
        }

        empty() {
            return ( this.size() === 0 );
        }

        insert(value) {
            this.heap.push(value)
            this.bubbleUp();
        }

        bubbleUp() {
            let index = this.size()-1;

            while(index > 0)
            {
                let element = this.heap[index];
                let parentIndex = Math.floor((index-1)/2);

                let parent = this.heap[parentIndex]

                if(parent[0] > element[0])
                {
                    break;
                }
                else
                {
                    this.heap[index] = parent
                    this.heap[parentIndex] = element
                    this.index = parentIndex;
                }
            }
        }


        extractMax() {
            let mx = this.heap[0];

            let lt = this.heap.pop()

            if(!this.empty())
            {
                this.heap[0] = lt;
                this.sinkdown(0);
            }

            return mx;
        }

        sinkdown(index)
        {   
            let left =2*index + 1;

            let right = 2*index + 2;

            let largest = index
            let length = this.size();

            if(left < length && this.heap[left][0] > this.heap[largest][0])
            {
                largest = left
            }

            if(right < length && this.heap[right][0] > this.heap[largest][0])
            {
                largest = right
            }

            if(largest != index)
            {
                let temp = this.heap[largest]
                this.heap[largest] = this.heap[index]
                this.heap[index] = temp
                this.sinkdown(largest)
            }
        }
    }

    let mxheap = new BinaryHeap();


    mxheap.insert([4,5]);
    mxheap.map((h) => {
        console.log(h[0])
    })
    mxheap.insert([2,4]);
    this.map((h) => {
        console.log(h[0])
    })
    mxheap.insert([1,3]);
    this.map((h) => {
        console.log(h[0])
    })
    mxheap.insert([6,1]);
    this.map((h) => {
        console.log(h[0])
    })


    while(!mxheap.empty())
    {
        let mx =  mxheap.extractMax()
        console.log(mx)
    }