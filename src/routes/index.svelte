<script context="module">
  import '../app.css'
</script>

<script>
  import { onMount } from 'svelte'
  import dayjs from 'dayjs'

  // @ts-ignore
  import Background from '../../static/roses.jpg?w=300;500;1000;1400;2000&format=webp;jpeg&srcset'

  let reh = null
  let countdown = ''

  onMount(() => {
    const day = dayjs().subtract(12, 'hours')
    reh = day.date() % 2 === 1

    const deadline = day.startOf('day').add(1, 'day').add(12, 'hours')
    setInterval(() => {
      const now = dayjs()
      const h = deadline.diff(now, 'hours')
      const tmp = deadline.subtract(h, 'h')
      const m = tmp.diff(now, 'minutes')
      const s = tmp.subtract(m, 'minutes').diff(now, 'seconds')
      countdown = [h, m, s].map((n) => n.toString().padStart(2, '0')).join(' : ')
    }, 500)
  })
</script>

<div>
  <img srcset={Background} alt="roses" />
  {#if reh !== null}
    <p>
      Heute hat
      <span class="big"> {reh ? '🦌' : '🐘'} </span>
      <span class="small">{!reh ? '🦌' : '🐘'}</span>
      lieber.
      <small>(noch so {countdown})</small>
    </p>
  {/if}
</div>

<style>
  div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  p {
    margin: 0;
    background-color: rgb(255, 205, 205);
    padding: 2rem;
    padding-bottom: 3rem;
    position: relative;
    text-align: center;
    font-size: 2rem;
  }

  span {
    display: block;
  }

  .big {
    font-size: 6rem;
  }
  .small {
    font-size: 3rem;
  }

  small {
    position: absolute;
    bottom: 0.5rem;
    right: 1rem;
    font-size: 1rem;
  }
</style>
